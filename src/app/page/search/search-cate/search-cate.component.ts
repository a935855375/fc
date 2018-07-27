import {Component} from '@angular/core';

@Component({
  selector: 'app-search-cate',
  templateUrl: './search-cate.component.html',
  styleUrls: ['./search-cate.component.scss']
})
export class SearchCateComponent {
  k: number = 0;
  kind = Array(7).fill(-1);
  kindLast = Array(7).fill(-1);
  ranges = ['企业名', '法人或股东', '高管', '品牌/产品', '联系方式', '经营范围'];
  types = ['企业', '社会组织', '香港公司', '台湾公司'];
  staues = ['暂无(15)', '正常(671)', '核准设立(1)', '存续(2915)', '迁入(2)', '迁出(3)', '吊销(398)', '撤销(2)', '仍注册(1)', '已告解散(1)', '注销(878)'];
  capitals = ['500万以下', '500~1000万', '1000~5000万', '5000万以上'];
  dates = ['2018 (207)', '2017 (765)', '2016 (506)', '2015 (454)', '2014 (424)'];
  provinces = ['安徽 (102)', '北京 (162)', '重庆 (82)', '福建 (40)'];
  works = ['农、林、牧、渔业 (328)', '采矿业 (11)', '制造业 (325)', '电力、热力、燃气及水生产和供应业 (22)'];

  selValue(idx, select) {
    if (this.kindLast[idx] == select) {
      this.kind[idx] = -1;
      this.kindLast[idx] = -1;
    } else {
      this.kind[idx] = select;
      this.kindLast[idx] = select;
    }
  }
}
