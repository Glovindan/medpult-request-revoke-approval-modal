import React, { useState } from 'react'

function LabledField({ children, label }: { children?: any, label: string }) {

	return (
		<div className="labled-field-letter">
			<div className="labled-field-letter__label">
				{label}
			</div>
			<div className="labled-field-letter__input">
				{children && children}
			</div>
		</div>
	)
}

export default LabledField
