import React from 'react'
import PropTypes from 'prop-types'

export const Right = x => ({
  map: f => Right(f(x)),
  chain: f => f(x),
  fold: (f, g) => g,
  inpect: () => `Right(${x})`
})

export const Left = x => ({
  map: f => Left(x),
  chain: f => Left(x),
  fold: (f, g) => f,
  inpect: () => `Left(${x})`
})

export const fromNullable = obj =>
      obj != null ? Right(obj) : Left(obj)

const Either = ({ when, left, right }) => when ? right : left

const {
  element, bool
} = PropTypes

/**
 * PropTypes
 * @property {Boolean}  when Condition to the handler
 * @property {Element}  left Does not display if the condition is false
 * @property {Element}  right Will show
 */
Either.propTypes = {
  when: bool.isRequired,
  left: element.isRequired,
  right: element.isRequired,
}

export default Either
