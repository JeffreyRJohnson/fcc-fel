import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../reducers";

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @param {object} initialState - Initial state for setup.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (Component, conformingProps) => {
  const propError = checkPropTypes(
    Component.propTypes,
    conformingProps,
    "prop",
    Component.name
  );
  expect(propError).toBeUndefined();
};
