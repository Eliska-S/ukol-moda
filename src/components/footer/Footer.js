import React from 'react'

// styles
import './Footer.css'

export default function Footer( { year, author }) {
  return (
    <footer class="footer">
		<p class="footer__copyright">&copy; { year }, { author }</p>
		<p class="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
	</footer>
  )
}
