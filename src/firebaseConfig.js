import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAKR4XwMn45YHGLeTDO3GKMQV-nKkbIFZE',
	authDomain: 'screen-pulp-ott.firebaseapp.com',
	projectId: 'screen-pulp-ott',
	storageBucket: 'screen-pulp-ott.appspot.com',
	messagingSenderId: '431191626389',
	appId: '1:431191626389:web:a0004e3d25a45ca8f2819c',
	measurementId: 'G-KD6KWJ1G8L',
}

const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app)
const db = getStorage(app)

export { firebaseAuth }
export default db
