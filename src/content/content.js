export let content = {
	title: '',
	intro: '',

	cards: [
		{
			type: 'basic', 
			content: {
				images: [
					{
						name: 'image.jpg',
						caption: 'Picture caption',
						credit: 'Credit Name'
					}
				],
				grid: {
					style: '', // icon || square || circle
					icon: 'icon.svg', //icon shape, color controlled through app
					total: '', // int as number or string
					hilighted: '' // int as number or string
				},
				text: {
					display: 'Card  title',
					quote: {
						text: 'Quote text',
						credit: 'Who said it'
					},
					list: [ // type is controlled by template (?)
						'First list item',
						'Ssecond list item'
					],
					number: {
						type: 'percent', //int, float, percent
						value: 50 // provide conversion from string as fallback
					}
				}
			},
			animations: { // controlled by template (?)
				enter: '',
				active: '',
				exit: ''
			},

		} // end of card data


	]
}