import React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { bool, func, array, string } from "prop-types";

const TagField = props => (
  <Autocomplete
    disabled={props.disabled}
    multiple
    id="tags-filled"
    options={props.options}
    freeSolo
    defaultValue={props.defaultValue}
    onChange={(event, values) => {
      props.onTagChange(values);
    }}
    renderTags={(value, getTagProps) =>
      value.map((option, index) => {
        const { key, ...chipProps } = getTagProps({ index });
        return (
          <Chip key={key} variant="outlined" label={option} {...chipProps} />
        );
      })
    }
    renderInput={params => {
      return (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
          placeholder={props.placeholder}
        />
      );
    }}
  />
);

TagField.propTypes = {
  options: array,
  defaultValue: array,
  disabled: bool,
  onTagChange: func,
  label: string,
  placeholder: string
};

export default TagField;
