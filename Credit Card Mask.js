// return masked string
function maskify(cc){
    var alt = "";
    for (var index = 0; index < cc.length; ++index){
      if (index <= cc.length - 5) {
        alt = alt.concat((cc[index]).replace(cc[index], "#"));
      } else {
        alt = alt.concat(cc[index]);
      }
    }
    return alt
  }