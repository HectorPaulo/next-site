export type Item = {
    id: number;
    title: string;
    desc: string;
    image: string;
};

export type Items = {
    applications: Item[];
    illustrations: Item[];
    websites: Item[];
};

export const items: Items = {
    applications: [
        {
            id: 1,
            title: "Portafolio creativo",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/9242852/pexels-photo9242852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Producto minimalista",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/5380792/pexels-photo5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Juntos hacemos caridad",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/1181622/pexels-photo1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ],
    illustrations: [
        {
            id: 1,
            title: "Portafolio creativo",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/9242852/pexels-photo9242852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Producto minimalista",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/5380792/pexels-photo5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Juntos hacemos caridad",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/1181622/pexels-photo1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ],
    websites: [
        {
            id: 1,
            title: "Portafolio creativo",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/9242852/pexels-photo9242852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Producto minimalista",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/5380792/pexels-photo5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Juntos hacemos caridad",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?",
            image: "https://images.pexels.com/photos/1181622/pexels-photo1181622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ],
};