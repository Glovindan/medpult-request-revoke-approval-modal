import React, { useEffect, useState } from 'react';
import { revokeApprovalContext, RevokeApprovalData } from '../../../stores/InsuranceLetterContext';
import Button from '../../../../UIKit/Button/Button';
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes';
import Scripts from '../../../shared/utils/clientScripts';
import FileViewer from '../FileViewer/FileViewer';
import InsuredList from '../../InsuredList/InsuredList';

/** Модальное окно гарантийного письма (Предпросомтр) */
export default function PreviewModal() {
	const { data, setValue } = revokeApprovalContext.useContext();
	const [isFileLoading, setIsFileLoading] = useState<boolean>(false);

	// Инициализация
	React.useLayoutEffect(() => {
		const setRevokeData = (revokeData: RevokeApprovalData) => {
			setValue("revokeApproval", revokeData);
		}

		// (window as any).setApprovalId = (id: string) => setValue("revokeApproval", {...data.revokeApproval, approvalId: id})

		Scripts.appendSetRevokeDataCallback(setRevokeData)
	}, [])

	// Сохранение
	const onClickSave = async () => {
		const revokeData = data.revokeApproval
		await Scripts.updateRevokeData(revokeData)
		await Scripts.handleSaveRevokeClick(data.revokeApproval.revokeId)
	}

	// Отмена
	const onClickCancel = async () => {
		await Scripts.handleCancelRevokeClick(data.revokeApproval.revokeId)
	}

	/** Изменить идентификаторы выбранных контрагентов */
	const setSelectedContractorsIds = (ids: string[]) => {
		const letterData = data.revokeApproval;

		letterData.contractorsIds = ids;

		setValue("revokeApproval", letterData)
	}

	return (
		<div className='insurance-letter-modal'>
			<div className="insurance-letter-modal__header">
				<span className="insurance-letter-modal__label">Отзыв согласования</span>
			</div>
			<div className='insurance-letter-modal__content' style={{ width: "600px", height: "600px" }}>
				{/* Предпросмотр файла */}
				<div className='insurance-letter-modal__viewer'>
					<FileViewer src={data.revokeApproval.fileSrc} isFileLoading={isFileLoading} />
				</div>
				{/* Выбор застрахованных  */}
				{data.revokeApproval.isCollective && !data.revokeApproval.isFull &&
					<div className='insurance-letter-modal__insured-list'>
						<InsuredList approvalId={data.revokeApproval.approvalId} selectedContractorsIds={data.revokeApproval.contractorsIds} setSelectedContractorsIds={setSelectedContractorsIds} />
					</div>
				}
				{/* Кнопки */}
				<div className='insurance-letter-modal__buttons'>
					{/* Подтвердить и сохранить */}
					{!isFileLoading && <Button title={"Подтвердить и сохранить"} clickHandler={onClickSave} />}
					{/* Отменить */}
					<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={onClickCancel} />
				</div>
			</div>
		</div>
	)
}