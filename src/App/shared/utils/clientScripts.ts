import { FetchData, ItemData, SortData } from '../../../UIKit/CustomList/CustomListTypes'
import { RevokeApprovalContext, RevokeApprovalData } from '../../stores/InsuranceLetterContext'
import { InsuredListData } from '../types'
/** Ожидание */
function sleep(ms: number) {
	return new Promise((resolve) => window.setTimeout(resolve, ms))
}
type SetLetterDataCallback = (data: RevokeApprovalData) => void
/** Функция обратного вызова заполнения данных модалки */
let setLetterDataCallback: SetLetterDataCallback | undefined
async function appendSetRevokeDataCallback(callback: SetLetterDataCallback) {
	setLetterDataCallback = callback
	;(window as any)['setLetterDataCallback'] = callback
}

/** Обработчик нажатия на кнопку отмена */
async function handleCancelRevokeClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить */
async function handleSaveRevokeClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить Email */
async function handleSaveEmailClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить на бланке */
async function handleSavePaperClick() {
	// TODO
}

// /** Обработчик нажатия на кнопку обновить */
// async function handleUpdateClick(data: InsuranceLetterData) {
// 	// TODO
// 	await sleep(1000)
// }

/** Обработчик нажатия на кнопку устное */
async function handleVerbalClick() {
	// TODO
	await sleep(1000)
}

/** Обработчик нажатия на кнопку email */
async function handleEmailClick() {
	// TODO
	await sleep(1000)
}

/** Обработчик нажатия на кнопку гп на бланке */
async function handlePaperClick() {
	// TODO
	await sleep(1000)
}

/** Генерация текста для email */
async function generateEmailText(): Promise<string> {
	// TODO
	await sleep(1000)

	return 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis!'
}

/** Обновление дат согласования */
async function updateRevokeData(data: RevokeApprovalData): Promise<void> {
	// TODO
	await sleep(1000)
}

/** Получение файла согласования */
async function generateFile(): Promise<string> {
	// TODO
	await sleep(1000)

	return ''
}

/** Создание функции Получения списка застрахованных по id согласования */
function getInsuredListRevokeFactory(approvalId: string) {
	console.log(approvalId);
	return async(
		page: number,
		sortData?: SortData,
	) => {
		//  TODO: Реализация поиска с фильтрацией по approvalId
		return getInsuredListRevoke(page, sortData)
	}
}

/** Получение списка застрахованных */
async function getInsuredListRevoke(
	page: number,
	sortData?: SortData,
): Promise<FetchData<InsuredListData>> {
	console.log({
		page,
		sortData,
	})

	await new Promise(r => setTimeout(r, 1000))
	const mockData: InsuredListData = {
		fullname: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		birthdate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		phone: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		email: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policy: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyStartDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyEndDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyTerm: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyRegion: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyProduct: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		plan: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		moreButton: new ItemData({ value: 'Подробнее', info: 'test' }),
	}

	return {
		items: Array(20)
			.fill(0)
			.map((data, index) => {
				return {
					id: String(index),
					data: new InsuredListData(mockData),
				}
			}),
		hasMore: true,
	}
}

export default {
	handleVerbalClick,
	handleEmailClick,
	handlePaperClick,
	generateEmailText,
	generateFile,
	handleSaveEmailClick,
	handleSavePaperClick,
	
	appendSetRevokeDataCallback,
	handleCancelRevokeClick,
	updateRevokeData,
	handleSaveRevokeClick,
	getInsuredListRevoke,
	getInsuredListRevokeFactory
}
