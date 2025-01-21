import { ApprovalForm } from '../shared/types'
import { initGlobalContext } from './GlobalContext'

/** Данные отзыва согласования */
export class RevokeApprovalData {
	/** ID Согласования */
	approvalId: string
	/** ID Отзыва */
	revokeId: string
	/** Тело файла */
	fileSrc: string
	/** Идентификаторы застрахованных */
	contractorsIds: string[]
	/** Является коллективным */
	isCollective: boolean
	/** Полный отзыв? */
	isFull?: boolean

	constructor() {
		this.fileSrc = ''
		this.contractorsIds = []
		this.isCollective = false
		this.isFull = true
	}
}

/** Данные контекста гарантийного письма */
export class RevokeApprovalContext {
	/** Тело файла */
	revokeApproval: RevokeApprovalData

	constructor() {
		this.revokeApproval = new RevokeApprovalData()
	}
}

export const revokeApprovalContext = initGlobalContext<RevokeApprovalContext>(
	new RevokeApprovalContext()
)
