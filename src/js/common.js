/**
 * navChang-tab切换，当前加active，其他移除active
 * @param = id，传来一个父元素的id
 * chaojiwudimsnyy
 **/
class navChang{
	constructor(id) {
		$('#'+id+ ' li').click(function(){   //给id里面的每一项li加一个点击事件
			$(this).addClass('active').siblings().removeClass('active');  //给当前选中的li加上active ,给其他没选中的除掉active名。
		})
		
	}
}