'use client'

import { FormEvent, useState } from 'react'

interface CommentFormProps {
  articleId: string
}

export default function CommentForm({ articleId }: CommentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    setIsError(false)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          comment: formData.get('comment'),
          articleId,
        }),
      })
      const result: { message?: string } = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'We could not submit your comment.')
      }

      form.reset()
      setMessage(result.message || 'Comment submitted for approval!')
    } catch (error) {
      setIsError(true)
      setMessage(error instanceof Error ? error.message : 'We could not submit your comment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name <span aria-hidden="true" className="text-gold-deep">*</span>
          <input
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
            maxLength={100}
            name="name"
            required
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email <span className="font-normal text-muted">(optional, not displayed)</span>
          <input
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-gold"
            maxLength={254}
            name="email"
            type="email"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Comment <span aria-hidden="true" className="text-gold-deep">*</span>
        <textarea
          className="mt-2 w-full rounded-lg border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none transition focus:border-gold"
          maxLength={5000}
          name="comment"
          required
          rows={5}
        />
      </label>
      <p className="text-xs leading-relaxed text-muted">
        Comments are reviewed before they appear publicly. Please do not include sensitive or
        confidential information.
      </p>
      <button
        className="btn btn-dark disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Submitting…' : 'Submit comment'}
      </button>
      {message && (
        <p aria-live="polite" className={`text-sm ${isError ? 'text-red-700' : 'text-green-800'}`}>
          {message}
        </p>
      )}
    </form>
  )
}
