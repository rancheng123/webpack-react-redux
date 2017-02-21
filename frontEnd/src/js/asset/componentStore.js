


//���������
class ComponentStore{
    constructor(){

        //�������ֻ��
        this.modules = {};
    };
    getById(id){
        if(this.isExist(id)){
            return this.modules[id];
        }else{
            console.error('�����Ϊ'+id+'������')
            return null;
        }

    };
    setById(id,component){
        if(this.isExist(id)){
            console.error('���id��'+ id +'�ظ�')
            return;
        }
        this.modules[id] = component;
    };
    clearById(id){
        if(!this.isExist(id)){
            console.error('�����Ϊ'+id+'������')
            return;
        };
        this.modules[id] = null;
        delete this.modules[id];
    };
    //�ж�����Ƿ����
    isExist(id){
        return this.modules[id]?true:false;
    };
};
window.componentStore = new ComponentStore();

