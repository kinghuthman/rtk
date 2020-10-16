import { connect } from 'react-redux'
import { setVisibilityFilter } from '../features/filters/filtersSlice'
import Link from '../components/Link'

// might need to understand this deeper
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})
// props for component
const mapDispatchToProps = { setVisibilityFilter }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)