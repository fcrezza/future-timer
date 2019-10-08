import React from 'react'
import {CloseBtn} from '../style/CloseBtn';

export default function closeBtn({handleSetEvent}) {
	return <CloseBtn href="##" className="close-btn" onClick={handleSetEvent}>x</CloseBtn>
}