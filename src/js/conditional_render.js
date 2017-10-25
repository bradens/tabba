import { branch, renderComponent, renderNothing } from 'recompose'

export default (hasLoaded, component) =>
  branch(
    props => !hasLoaded(props),
    component ? renderComponent(component) : renderNothing
  )
