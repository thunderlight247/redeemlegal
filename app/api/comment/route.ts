import { createClient } from 'next-sanity'
import { NextResponse } from 'next/server'

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_COMMENT_LENGTH = 5000

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ message: 'Please submit a valid comment.' }, { status: 400 })
  }

  if (!payload || typeof payload !== 'object') {
    return NextResponse.json({ message: 'Please submit a valid comment.' }, { status: 400 })
  }

  const { name, email, comment, articleId } = payload as Record<string, unknown>

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof comment !== 'string' ||
    typeof articleId !== 'string'
  ) {
    return NextResponse.json({ message: 'Please complete the required fields.' }, { status: 400 })
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedComment = comment.trim()
  const trimmedArticleId = articleId.trim()

  if (
    !trimmedName ||
    trimmedName.length > MAX_NAME_LENGTH ||
    trimmedEmail.length > MAX_EMAIL_LENGTH ||
    (trimmedEmail.length > 0 && !isEmail(trimmedEmail)) ||
    !trimmedComment ||
    trimmedComment.length > MAX_COMMENT_LENGTH ||
    !trimmedArticleId
  ) {
    return NextResponse.json(
      { message: 'Check your details. Names, email addresses, or comments may be too long or invalid.' },
      { status: 400 }
    )
  }

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  const token = process.env.SANITY_API_WRITE_TOKEN

  if (!projectId || !token) {
    console.error('Comment submission requires NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN.')
    return NextResponse.json(
      { message: 'Comment submission is temporarily unavailable.' },
      { status: 503 }
    )
  }

  const writeClient = createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-15',
    token,
    useCdn: false,
  })

  try {
    const articleExists = await writeClient.fetch(
      `count(*[_type == "article" && _id == $articleId]) > 0`,
      { articleId: trimmedArticleId }
    )

    if (!articleExists) {
      return NextResponse.json({ message: 'The article could not be found.' }, { status: 404 })
    }

    await writeClient.create({
      _type: 'comment',
      name: trimmedName,
      ...(trimmedEmail ? { email: trimmedEmail } : {}),
      comment: trimmedComment,
      approved: true,
      article: {
        _type: 'reference',
        _ref: trimmedArticleId,
      },
      createdAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Error saving a comment to Sanity:', error)
    return NextResponse.json(
      { message: 'We could not submit your comment. Please try again later.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'Comment posted successfully!' }, { status: 201 })
}
