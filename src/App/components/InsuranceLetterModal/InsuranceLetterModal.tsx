import React from 'react';
import { revokeApprovalContext } from '../../stores/InsuranceLetterContext';
import PreviewModal from './PreviewModal/PreviewModal';

/** Модальное окно отзыва согласования */
export default function RevokeApprovalModal() {
	const [data, setValue] = revokeApprovalContext.useState()

	return (
		<div style={{ display: "flex", backgroundColor: "gray", width: "100vw", height: "100vh", justifyContent: 'center', alignItems: "center" }}>
		<revokeApprovalContext.Provider value={{ data, setValue }}>
			<PreviewModal />
		</revokeApprovalContext.Provider >
		</div>
	)
}