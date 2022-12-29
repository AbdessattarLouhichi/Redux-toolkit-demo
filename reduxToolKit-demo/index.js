const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions;
const fetchUsers = require('./features/users/userSlice').fetchUsers


console.log('initial State', store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('Update State', store.getState());
});

store.dispatch(fetchUsers())
//unsubscribe()