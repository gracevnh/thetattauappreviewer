import { useRouter } from "next/router";
import { useState } from "react";
import Select from "react-select"

const customSelectStyles = {
    option: (provided) => ({
        ...provided,
        color: "black",
    }),
    control: (provided) => ({
        ...provided,
        color: "black",
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "black",
    }),
};

const JumpToApp = ({ namesAndIds, currApp }: { 
    namesAndIds: {
        name: string,
        id: number
    }[],
    currApp: number
}) => {
    const { push } = useRouter()
    const selectOptions = namesAndIds.map(({ name, id }) => ({
        value: id,
        label: name
    }))

    const [selectedOption, setSelectedOption] = useState(selectOptions[currApp]);

    const handleSelectChange = (selectedOption) => {
        if (!selectedOption) {
            return;
        }
        setSelectedOption(selectedOption);

        push(`/${selectedOption.value}`);
    };
    return (<span style={{ width: 250, display: "inline-block", marginBottom: "var(--gap)" }}>
        <Select
            value={selectedOption}
            onChange={handleSelectChange}
            styles={customSelectStyles}
            isSearchable={true}
            options={selectOptions}
        />{" "}
    </span>)
}

export default JumpToApp