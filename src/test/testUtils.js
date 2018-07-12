import checkPropTypes from "check-prop-types";
import { Component } from "react";

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