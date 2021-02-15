using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    class ExtraToOrderDto
    {
        public int ExtraOrdId { get; set; }
        public int idExtra { get; set; }
        public int idOrder { get; set; }
        public ExtraToOrderDto(Dal.ExtraToOrder e)
        {
            this.ExtraOrdId = e.ExtraOrdId;
            this.idExtra = e.idExtra;
            this.idOrder = e.idOrder;

        }
        public static Dal.ExtraToOrder Todal(ExtraToOrderDto e)
        {
            return new Dal.ExtraToOrder
            {
            ExtraOrdId = e.ExtraOrdId,
            idExtra = e.idExtra,
            idOrder = e.idOrder
        };
        }
    }
}
