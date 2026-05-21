export const getAppointments = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`,{cache: 'no-store'})
  const data = await res.json()
  return data
}

export const getFeatured = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {cache: 'no-store'})
  const data = await res.json()
  return data
}