


//组件管理器
class ComponentStore{
    constructor(){

        //如何设置只读
        this.modules = {};
    };
    getById(id){
        if(this.isExist(id)){
            return this.modules[id];
        }else{
            console.error('组件名为'+id+'不存在')
            return null;
        }

    };
    setById(id,component){
        if(this.isExist(id)){
            console.error('组件id名'+ id +'重复')
            return;
        }
        this.modules[id] = component;
    };
    clearById(id){
        if(!this.isExist(id)){
            console.error('组件名为'+id+'不存在')
            return;
        };
        this.modules[id] = null;
        delete this.modules[id];
    };
    //判断组件是否存在
    isExist(id){
        return this.modules[id]?true:false;
    };
};
window.componentStore = new ComponentStore();

