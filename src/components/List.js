import React from "react"
import { Query } from "react-apollo"
import { gql } from "apollo-boost"

const GET_ALL_COUNTRIES = gql`
	{
		countries {
			name
			code
			emoji
		}
	}
`

const List = () => (
	<Query query={GET_ALL_COUNTRIES}>
		{({ loading, error, data }) => {
			if (loading) return <h1>Loading...</h1>
			if (error) return <h2>404. Looks like API is down!</h2>

			return data.countries.map(({ name, code, emoji }) => (
				<div key={code}>
					<p>Name: {name}</p>
					<p>Flag: {emoji}</p>
					<hr />
				</div>
			))
		}}
	</Query>
)

export default List
