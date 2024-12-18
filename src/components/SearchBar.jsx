import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.props.onSearch(keyword);
  }

  render() {
    return (
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={this.state.keyword}
          onChange={this.handleChange}
          className="w-full px-4 py-2 text-gray-100 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset"
        />
      </div>
    );
  }
}

export default SearchBar;
