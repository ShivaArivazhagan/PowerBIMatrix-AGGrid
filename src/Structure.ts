export const flatten = (data: any) => {
    const output = []
    const generateData = (rows:any, parent:any, previousValue:any) => {
        const obj = { ...previousValue };
        rows.forEach((row:any )=> {
            if(row.value){
                const id = parent.childIdentityFields[0].ref;
                obj[id] = row.value;
                if (row.children) {
                    generateData(row.children, row, obj)
                } else {
                    output.push(obj)
                }
            }
        })
    }
    generateData(data.children, data, {})
    return output;
} 

 