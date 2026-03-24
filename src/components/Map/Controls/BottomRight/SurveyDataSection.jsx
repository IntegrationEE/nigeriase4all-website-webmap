import React from 'react';

function SurveyDataSection(props) {
    const {icon, contentArray} = props;

    return (
            <>
                <tr>
                    <td  rowSpan={contentArray.length+1}><div style={{width: "40px",  display:"flex", justifyContent: "center", alignItems: "center"}}>{icon}</div></td>
                </tr>
                {contentArray.map((content,key)=>(
                    <tr key={key}>
                        <th scope="row" style={{textAlign: "left"}}><b>{content[0]}</b></th>
                        <td style={{textAlign: "right"}}>{content[1]}</td>
                    </tr>
                ))}
            </>
  )
}

export default SurveyDataSection;