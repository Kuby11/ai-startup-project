export default function Logo() {
	return (
		<button type="button" className="cursor-pointer transition hover:shadow-md shadow-accent/50 rounded-xl">
			<img src={`${import.meta.env.BASE_URL}/images/Logo.png`} width='38' height='38' />	
		</button>
	)
}
