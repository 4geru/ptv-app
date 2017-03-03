import request from 'superagent'
import CryptoJS from 'crypto-js'

const dataService = store => next => action => {



	next(action)
	switch (action.type) {
	case 'GET_DATA':

		var key = 'c2c66cac-9838-4f77-bb03-de62b93ba091'
		var developerId = '3000061'

		var base = 'http://timetableapi.ptv.vic.gov.au'

		var url = '/v2/stops/?stop_point_id='

		var url2 = '&signature='



			if (action.stop_id == undefined){
				var line = 15351
			}
			else{
				var line = action.stop_type
			}

		var method = '&location=1&amenity=1&accessibility=1&devid='

		url += line += method +=developerId

		var signature = CryptoJS.HmacSHA1(url, key)

		var api = base += url += url2 +=signature

		//alert(api)

		request
			.get(api)
			.end((err, res) => {

				if (err) {
					return next({
						type: 'GET_DATA_ERROR',
						err
					})
				}


				var temp = '['+ res.text +']'

				const data = JSON.parse(temp)

				//alert('yay got ' + JSON.stringify(data))

				next({
					type: 'GET_DATA_RECEIVED',
					data
				})
			})
		break
	default:
		break
	}

};

export default dataService
