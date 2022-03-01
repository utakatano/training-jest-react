import React from 'react'
import {create} from 'react-test-renderer'
import {Link} from '../../components/Link'

test('Link changes the class when hovered', () => {
  const component = create(
    <Link page='http://www.facebook.com'>Facebook</Link>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  (tree as any).props.onMouseEnter()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot();

  (tree as any).props.onMouseLeave()
  tree = component.toJSON()
  expect(tree).toMatchSnapshot();  
})