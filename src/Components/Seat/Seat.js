import { useState } from "react"

export default function Seat({ seat, filterSeatId }) {

  const [selected, setSelected] = useState('available');

  function selectSeat() {
    if (!seat.isAvailable) {
      return (alert('Assento indisponível'));
    }
    if (selected === 'available') {
      setSelected('selected');
      filterSeatId(seat, true);
    } else {
      setSelected('available');
      filterSeatId(seat, false);
    }

  }

  return (
    <div onClick={selectSeat} className={
      seat.isAvailable ? `seat ${selected}` : 'seat unavailable'
    }> {seat.name} </ div>
  )
}