import { ItemData, ItemDataString } from '../../UIKit/CustomList/CustomListTypes'

export interface IInputData<DataType = any> {
	value: string
	data?: DataType
}

export class SelectTaskData {
	// Номер задачи - строчька
	number?: ItemData
	// Статус задачи - флажки
	status?: ItemData
	// Тип задачи - флажки
	type?: ItemData
	// Вид задачи - поиск по названию
	sort?: ItemData
	// Дата создания - дата с по
	createdAt?: ItemDataString
	// Дата контроля - дата с по
	controledAt?: ItemDataString
	// Автор - поиск по названию
	author?: ItemData
	// Исполнитель - поиск по названию
	executor?: ItemData
	// Обращение - формы отбора
	request?: ItemData
	// Застрахованный - формы отбора
	insured?: ItemData

	constructor({
		number,
		status,
		type,
		sort,
		createdAt,
		controledAt,
		author,
		executor,
		request,
		insured,
	}: SelectTaskData) {
		this.number = number
		this.status = status
		this.type = type
		this.sort = sort
		this.createdAt = createdAt
		this.controledAt = controledAt
		this.author = author
		this.executor = executor
		this.request = request
		this.insured = insured
	}
}

export class InsuredListData {
	/** ФИО застрахованного */
	fullname?: ItemData
	/** Дата рождения */
	birthdate?: ItemData
	/** Телефон */
	phone?: ItemData
	/** Email */
	email?: ItemData
	/** Полис */
	policy?: ItemData
	/** Дата начала действия полиса */
	policyStartDate?: ItemData
	/** Дата окончания действия полиса */
	policyEndDate?: ItemData
	/** Срок действия полиса */
	policyTerm?: ItemData
	/** Регион действия полиса */
	policyRegion?: ItemData
	/** Продукт */
	policyProduct?: ItemData
	/** План страхования */
	plan?: ItemData
	/** Кнопка Подробнее, при нажатии на которую происходит переход на форму данного Контрагента (по аналогии с кнопкой Подробнее в текущей реализации) */
	moreButton?: ItemData

	constructor({
		fullname,
		birthdate,
		phone,
		email,
		policy,
		policyStartDate,
		policyEndDate,
		policyTerm,
		policyRegion,
		policyProduct,
		plan,
		moreButton,
	}: InsuredListData) {
		this.fullname = fullname
		this.birthdate = birthdate
		this.phone = phone
		this.email = email
		this.policy = policy
		this.policyStartDate = policyStartDate
		this.policyEndDate = policyEndDate
		this.policyTerm = policyTerm
		this.policyRegion = policyRegion
		this.policyProduct = policyProduct
		this.plan = plan
		this.moreButton = moreButton
	}
}

/** Форма согласования */
export enum ApprovalForm {
	/** На бланке */
	paper = 'paper',
	/** Устно */
	verbal = 'verbal',
	/** Email */
	email = 'email',
}
