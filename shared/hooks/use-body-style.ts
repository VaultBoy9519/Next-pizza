import { useEffect } from 'react'

export const useBodyStyle = (open: boolean) => {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			if (open) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = ''
			}
		}
	}, [open])
}
