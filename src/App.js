"use strict"
import styles from './App.css'
import {state} from './State'
import * as util from './functions/utility'
import TitleCard from './templates/titleCard/TitleCard'

const isMobile = util.isMobileDevice() // true or false


const cards = [
	new TitleCard({ name: 'Dave' })
]

console.log('starting')
console.log(cards)

document.body.innerHTML = cards[0].template()