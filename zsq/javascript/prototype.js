var object = {	isA:function(aType){		var self = this;		while(self){			if(self == aType)			return true;			self = self.Type;		};		return fasle;	}	};function Class(aBaseClass,aClassDefine){	function class_(){		this.Type = aBaseClass;						for(var member in aClassDefine )		this[member] = aClassDefine[member];	};	class_.prototype = aBaseClass;	return new class_();};function New(aClass,aParams){	function new_(){		this.Type = aClass;		if(aClass.Create)		aClass.Create.apply(this,aParams);	};	new_.prototype = aClass;	return new new_();};var Person = Class(object,	{		Create:function(name,age){			this.name = name;			this.age = age;		},		sayHello:function(){			alert("i'm  " + this.name + " ," + this.age+" years old");		}	});	var Employee = Class(Person,{	Create:function(name,age,salary){		Person.Create.call(this,name,age);		this.salary = salary;	},	ShowMeTheMoney:function(){		alert(this.name + "$" + this.salary);	}});		var Bill = New(Person,["bill",53]);		Bill.sayHello();	//SeteveJobs.sayHello();	//SeteveJobs.ShowMeTheMoney();