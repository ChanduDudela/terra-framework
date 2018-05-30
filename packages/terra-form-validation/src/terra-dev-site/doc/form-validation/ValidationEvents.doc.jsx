/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../../../../docs/ValidationEvents.md';

// Example File
import ValidationOnInput from './example/ValidationOnInput';
import ValidationOnInputSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/ValidationOnInput';
import ValidationOnSubmit from './example/ValidationOnSubmit';
import ValidationOnSubmitSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/ValidationOnSubmit';
import ValidationDisableSubmit from './example/ValidationDisableSubmit';
import ValidationDisableSubmitSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/ValidationDisableSubmit';

const FormValidationExamples = () => (
  <DocTemplate
    readme={Documentation}
    examples={[
      {
        title: 'Validation onInput',
        example: <ValidationOnInput />,
        source: ValidationOnInputSrc,
      },
      {
        title: 'Validation onSubmit',
        example: <ValidationOnSubmit />,
        source: ValidationOnSubmitSrc,
      },
      {
        title: 'Validation Disable Submit',
        example: <ValidationDisableSubmit />,
        source: ValidationDisableSubmitSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
