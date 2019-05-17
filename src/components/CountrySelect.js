import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const GET_COUNTRIES = gql`
	{
		countries {
			name
			code
			emoji
		}
	}
`

class CountrySelect extends React.Component {
	state = {
		country: "PL"
	}

	// set the selected country to the new input value
	onCountryChange = event => {
		this.setState({ country: event.target.value })
	}

	render() {
		return (
			<Query query={GET_COUNTRIES}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>
					if (error) return <p>{error.message}</p>
					return (
						<div>
							<select
								value={this.state.country}
								onChange={this.onCountryChange}
								style={{ marginTop: "30px", height: "50px", fontSize: "20px" }}
							>
								{data.countries.map(({ code, name, emoji }) => (
									<option key={code} value={code}>
										{emoji} {name}
									</option>
								))}
							</select>
							<h3>Country Selected: {this.state.country}</h3>
						</div>
					)
				}}
			</Query>
		)
	}
}

export default CountrySelect
