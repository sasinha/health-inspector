import React from 'react'

// Component for search bar
class SearchBar extends React.Component {
	// Inherit React.Component module

  constructor(props) {
    super()

    // Create data
    this.state = {
      search: ''
    }
    
  }

  handleSearchChange = (e) => {
    this.setState({
      // [] to get value for key
      [e.target.name]: e.target.value
    })
  }

	// render function called whenever render data is changed
  // name used to bind varible to ui
  // value to bind ui to variable
	render() {
		return (
			<div className="searchbar-container">
				<form className="search-form">
					<input
						type="search"
						name="search"
            value={this.state.search}
						className="search-input"
						placeholder="Search Restaurants"
            onChange={this.handleSearchChange}
					/>
				</form>
			</div>
		)
	}
}

export default SearchBar