export interface DeviceFormState { 
	csnValid: boolean, 
	imeiValid: boolean,
	articles: {
		title: string,
		url: string
	}[] | undefined
}