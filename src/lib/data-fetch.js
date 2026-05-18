export const getAppointments = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`)
  const data = await res.json()
  return data
}

export const getFeatured = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
  const data = await res.json()
  return data
}