import React, { useState, useEffect, useRef } from 'react'
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from 'three'

const MyComponent = (props) => {
const [vantaEffect, setVantaEffect] = useState(0)
const myRef = useRef(null)
useEffect(() => {
if (!vantaEffect) {
setVantaEffect(WAVES({
THREE,
el: myRef.current
}))
}
return () => {
if (vantaEffect) vantaEffect.destroy()
}
}, [vantaEffect])
return <div>

Foreground content goes here
</div>


}
export default MyComponent