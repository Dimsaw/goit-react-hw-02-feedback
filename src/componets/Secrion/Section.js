import React from 'react';
import PropTypes from 'prop-types';

function Section({ title }) {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
