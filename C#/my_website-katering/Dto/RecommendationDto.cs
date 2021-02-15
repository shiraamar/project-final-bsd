using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    class RecommendationDto
    {
        public string userCode { get; set; }
        public Nullable<System.DateTime> dateR { get; set; }
        public string textR { get; set; }
        public RecommendationDto(Dal.Recommendation r)
        {
            this.userCode = r.userCode;
            this.dateR = r.dateR;
            this.textR = r.textR;
        }
        public static Dal.Recommendation Todal(RecommendationDto r)
        {
            return new Dal.Recommendation
            {
           userCode = r.userCode,
            dateR = r.dateR,
            textR = r.textR
        };
        }
    }
}
