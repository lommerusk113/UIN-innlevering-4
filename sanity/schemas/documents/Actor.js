const Actor = {
    title: "actor",
    name: "actor",
    type: "document",
    fields: [
        {
        name: "name",
        type: "string",
        validation: (Rule)=> Rule.required(),
        },
    ]
}

export default Actor