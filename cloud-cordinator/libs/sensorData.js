module.exports =  {
  1 : {
    sensorType: 'thermostat',
    reading:{
      payloadPattern: {
            type : 'uint8',
            currentTemp : 'float32',
            setTemp: 'float32',
            state : 'uint8'
      }
    },
    display:[
      {name: 'Current Temp', key: 'currentTemp', type:'degree'}
    , {name: 'Set Temperature', key: 'setTemp', type: 'degree'}
    , {name: 'State', key : 'state', type: 'enum',  keys: [0,1,2], values:['auto', 'off', 'on']}
    ],
    actions:[
      {  name: 'set',
        keys:[
          {name: 'state', formtype: 'dropdown', 
            type: 'uint8', settings:['auto', 'off', 'on'], values:[0, 1, 2]},
          {name: 'setTemp', formtype: 'number', type:'float32' }
        ],
        order: ['state', 'setTemp']
      }
    ]
  }
}
