import { useState } from "react"

export default function Seat({ seat }) {

  const [selected, setSelected] = useState('available');

  function selectSeat() {
    if (!seat.isAvailable) {
      return (alert('Assento indisponível'));
    }
    if (selected === 'available') {
      setSelected('selected');
    } else {
      setSelected('available');
    }

  }

  return (
    <div onClick={selectSeat} className={
      seat.isAvailable ? `seat ${selected}` : 'seat unavailable'
    }> {seat.name} </ div>
  )
}