const data = [   
    {
        ticketID:0,    
        timestamp:1900,
        priority:1,
        description:'Fix production error',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:1,
        timestamp:1901,
        priority:1,
        description:'Contact Client',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:2,
        timestamp:1902,
        priority:2,
        description:'Initialize Payroll',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:3,
        timestamp:1903,
        priority:2,
        description:'Re-Allocate Team2',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:4,
        timestamp:1904,
        priority:2,
        description:'Generate Test Cases',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:5,
        timestamp:1905,
        priority:3,
        description:'Address Freshers',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:6,
        timestamp:1906,
        priority:3,
        description:'Office Renovation Bill',
        status:true,     //true= open 
        summary:''   // if status=false
    },
    {
        ticketID:7,
        timestamp:1907,
        priority:3,
        description:'Fill TimeSheet',
        status:true,     //true= open 
        summary:''   // if status=false
    },

];

export default data;
//if status==false then render description