export const getAppointments = async()=>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`)
  const data = await res.json()
  return data
}