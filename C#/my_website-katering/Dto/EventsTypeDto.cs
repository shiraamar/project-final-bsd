using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
    class EventsTypeDto
    {

        public int idEvent { get; set; }
        public Nullable<int> statusDose { get; set; }
        public Nullable<int> amountMin { get; set; }
        public Nullable<int> statusMeal { get; set; }
        public Nullable<int> priceAll { get; set; }
        public EventsTypeDto(Dal.EventsType e)
        {
            this.idEvent = e.idEvent;
            this.statusDose = e.statusDose;
            this.amountMin = e.amountMin;
            this.statusMeal = e.statusMeal;
            this.priceAll = e.priceAll;
        }
        public static Dal.EventsType Todal(EventsTypeDto e)
        {
            return new Dal.EventsType
            {
            idEvent = e.idEvent,
            statusDose = e.statusDose,
            amountMin = e.amountMin,
            statusMeal = e.statusMeal,
            priceAll = e.priceAll
        };
        }
    }
}
