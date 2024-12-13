

export const Personal = () => {
  return (
		<form>
			<div>
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" name="email" />
			</div>
			<div>
				<label htmlFor="phone">Phone:</label>
				<input type="phone" id="phone" name="phone" />
			</div>
            <div>
                <label htmlFor="about">About You</label>
                <textarea name="about" id="about" cols={26} rows={10}></textarea>
            </div>

			<button type="submit">Submit</button>
		</form>
	);
}


